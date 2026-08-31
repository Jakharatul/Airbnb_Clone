const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

function getGeocodingClient() {
    const mapToken = process.env.MAP_TOKEN;
    if (!mapToken) {
        throw new Error("MAP_TOKEN environment variable is not defined");
    }
    return mbxGeocoding({ accessToken: mapToken });
}

module.exports.index = async (req,res)=>{
    const category = req.query.category;
    const search = req.query.search || req.query.location || req.query.q;
    let query = {};
    if (category && category.trim() !== "") {
        query.category = { $regex: `^${category.trim()}$`, $options: "i" };
    }
    if (search && search.trim() !== "") {
        query.location = { $regex: search.trim(), $options: "i" };
    }
    const allListings = await Listing.find(query);
    res.render("listings/index.ejs",{allListings, category: category || "", search: search || ""});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path : "reviews",
        populate:{
            path: "author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
};

module.exports.createListing = async(req,res,next) => {
  const geocodingClient = getGeocodingClient();
  let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1,
})
  .send();

        let url = req.file.path;
        let filename = req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url,filename};
        newListing.geometry = response.body.features[0].geometry;
        let savedListing = await newListing.save();
        console.log(savedListing);
        req.flash("success","New Listing Created");
        res.redirect("/listings");
    
    
};

module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings");
    };
    let OriginalImageUrl = listing.image.url;
    OriginalImageUrl = OriginalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing,OriginalImageUrl});
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !=="undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    };
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success"," Listing Deleted");
    res.redirect("/listings");
};