var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Clouds Rest",
        image: "http://www.switchbacktravel.com/sites/default/files/images/articles/Best%20Backpacking%20Tents.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet sausage spare ribs cupidatat pork cillum. Non ground round aliquip do t-bone eu picanha tenderloin meatball magna."
    },
    {
        name: "Ice Valley",
        image: "http://ogl.ihwvgt4haax430uvbbbj.netdna-cdn.com/photos/12/25/244011_24354_L2.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet sausage spare ribs cupidatat pork cillum. Non ground round aliquip do t-bone eu picanha tenderloin meatball magna."
    },
    {
        name: "The Great Divide",
        image: "https://i0.wp.com/onenomadwoman.com/wp-content/uploads/2014/04/tumblr_mfcm2rQWzI1qf9ufpo1_1280.jpg?resize=700%2C526",
        description: "Spicy jalapeno bacon ipsum dolor amet sausage spare ribs cupidatat pork cillum. Non ground round aliquip do t-bone eu picanha tenderloin meatball magna."
    },
    {
        name: "Glacier Lake",
        image: "https://www.off-the-path.com/wp-content/uploads/2014/10/Norwegen-Wandern-Trolltunga-1.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet sausage spare ribs cupidatat pork cillum. Non ground round aliquip do t-bone eu picanha tenderloin meatball magna."
    }
];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }else {
        console.log("removed camgrounds");
        //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("added a campground");
                        //creat a comment
                        Comment.create({
                            text: "this place is great but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else {
                              campground.comments.push(comment);
                              campground.save();
                              console.log("created new comment");
                            }
                        });
                    }
                });
            });
        } 
    });
    //add a few comments
}

module.exports = seedDB;


