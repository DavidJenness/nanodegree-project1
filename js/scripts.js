

$(document).ready(function () {

    $(".skillButton").click(function () {
        var title = $(this).text().trim();

        switch (title) {
            case "Database":
                $("#leftProjectName").text("Database Dev");
                $("#centerProjectName").text("Database Dev");
                $("#rightProjectName").text("Database Dev");

                $("#leftPic").attr("src", "img/left/sql.png");
                $("#centerPic").attr("src", "img/center/iOS2.png");
                $("#rightPic").attr("src", "img/right/xcode.jpg");

                $("#rightPicLink").attr("href", "/overview.html#Database")

                break;
            case 'iOS':
                $("#leftProjectName").text("iOS App #1");
                $("#centerProjectName").text("iOS App #2");
                $("#rightProjectName").text("iOS Overview");

                $("#leftPic").attr("src", "img/left/ios.png");
                $("#centerPic").attr("src", "img/center/iOS2.png");
                $("#rightPic").attr("src", "img/right/xcode.jpg");

                $("#leftPicLink").attr("href", "https://itunes.apple.com/us/app/redcritter/id791210761?mt=8")
                $("#leftDescription").attr("href", "https://itunes.apple.com/us/app/redcritter/id791210761?mt=8")
                $("#leftDescription").text("View iOS App")

                $("#rightPicLink").attr("href", "/overview.html#iOS")
                break;
            case "Android":
                $("#leftProjectName").text("Android App #1");
                $("#centerProjectName").text("Android App #2");
                $("#rightProjectName").text("Android Overview");

                $("#rightPicLink").attr("href", "/overview.html#Android")
                break;
            case "Cloud":
                $("#leftProjectName").text("Amazon AWS Dev");
                $("#centerProjectName").text("Microsoft Azure Dev");
                $("#rightProjectName").text("Cloud Overview");

                $("#rightPicLink").attr("href", "/overview.html#Cloud")
                break;

            case "GIS":
                $("#leftProjectName").text("GIS Project #1");
                $("#centerProjectName").text("GIS Project #2");
                $("#rightProjectName").text("GIS Overview");

                $("#rightPicLink").attr("href", "/overview.html#GIS")
                break;

            case "Web":
                $("#leftProjectName").text("Web Project #1");
                $("#centerProjectName").text("Web Project #2");
                $("#rightProjectName").text("Web Overview");

                $("#rightPicLink").attr("href", "/overview.html#Web")
                break;
            case "Certified":
                $("#leftProjectName").text("Amazon AWS");
                $("#centerProjectName").text("Microsoft");
                $("#rightProjectName").text("Certifications Overview");

                $("#leftPic").attr("src", "img/left/AWS.png");
                $("#centerPic").attr("src", "img/center/mcse.gif");
                $("#rightPic").attr("src", "img/right/Cert.png");

                $("#leftPicLink").attr("href", "https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=3DNKSDEKCNR1QZGW")
                $("#leftDescription").attr("href", "https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=3DNKSDEKCNR1QZGW")
                $("#leftDescription").text("View AWS Transcript")

                // Since it is a PDF, let's open it in a new tab
                $("#centerDescription").attr("target", "_blank")
                $("#centerPicLink").attr("target", "_blank")
                $("#centerPicLink").attr("href", "https://s3-us-west-2.amazonaws.com/udacity-jenness/MS_Learning_Transcript.PDF")
                $("#centerDescription").attr("href", "https://s3-us-west-2.amazonaws.com/udacity-jenness/MS_Learning_Transcript.PDF")
                $("#centerDescription").text("View Microsoft Transcript")

                $("#rightPicLink").attr("href", "/overview.html#Certified")
                $("#rightDescription").attr("href", "/overview.html#Certified")
                $("#rightDescription").text("Click for info")
                break;
            default:
                alert(title);
        }

    });

});