

$(document).ready(function () {

    $(".skillButton").click(function () {
        var title = $(this).text().trim();

        switch (title) {
            case "Database":
                $("#leftProjectName").text("SQL Server");
                $("#centerProjectName").text("Microsoft Access");
                $("#rightProjectName").text("Database Overview");

                $("#leftPic").attr("src", "./img/left/sql.png");
                $("#centerPic").attr("src", "./img/center/database2.png");
                $("#rightPic").attr("src", "./img/right/database3.jpg");

                $("#leftPicLink").attr("href", "./overview.html#Database")
                $("#leftDescription").attr("href", "./overview.html#Database")
                $("#leftDescription").text("View SQL Project")

                $("#centerPicLink").attr("href", "./overview.html#Database")
                $("#centerDescription").attr("href", "./overview.html#Database")
                $("#centerDescription").text("View Access Project")

                $("#rightPicLink").attr("href", "./overview.html#Database")
                $("#rightDescription").attr("href", "./overview.html#Database")
                $("#rightDescription").text("Database Overview")

                break;
            case 'iOS':
                $("#leftProjectName").text("iOS App #1");
                $("#centerProjectName").text("iOS App #2");
                $("#rightProjectName").text("iOS Overview");

                $("#leftPic").attr("src", "./img/left/ios.png");
                $("#centerPic").attr("src", "./img/center/ios2.png");
                $("#rightPic").attr("src", "./img/right/xcode.jpg");

                $("#leftPicLink").attr("href", "https://itunes.apple.com/us/app/redcritter/id791210761?mt=8")
                $("#leftDescription").attr("href", "https://itunes.apple.com/us/app/redcritter/id791210761?mt=8")
                $("#leftDescription").text("View iOS App")

                $("#centerPicLink").attr("href", "https://itunes.apple.com/us/app/redcritter-teacher/id950017904?mt=8")
                $("#centerDescription").attr("href", "https://itunes.apple.com/us/app/redcritter-teacher/id950017904?mt=8")
                $("#centerDescription").text("View iOS App")

                $("#rightPicLink").attr("href", "./overview.html#iOS")
                $("#rightDescription").attr("href", "./overview.html#iOS")
                $("#rightDescription").text("iOS Overview")
                break;
            case "Android":
                $("#leftProjectName").text("Android App #1");
                $("#centerProjectName").text("Android App #2");
                $("#rightProjectName").text("Android Overview");

                $("#leftPic").attr("src", "./img/left/android.png");
                $("#centerPic").attr("src", "./img/center/android2.png");
                $("#rightPic").attr("src", "./img/right/androidstudio.png");

                $("#leftPicLink").attr("href", "https://play.google.com/store/apps/details?id=com.redcritter.rcandroid")
                $("#leftDescription").attr("href", "https://play.google.com/store/apps/details?id=com.redcritter.rcandroid")
                $("#leftDescription").text("View Android App")

                $("#centerPicLink").attr("href", "https://play.google.com/store/apps/details?id=com.redcritter.rcandroidvertical&hl=en_IE")
                $("#centerDescription").attr("href", "https://play.google.com/store/apps/details?id=com.redcritter.rcandroidvertical&hl=en_IE")
                $("#centerDescription").text("View Android App")

                $("#rightPicLink").attr("href", "./overview.html#Android")
                $("#rightDescription").attr("href", "./overview.html#Android")
                $("#rightDescription").text("Android Overview")
                break;
            case "Cloud":
                $("#leftProjectName").text("Amazon AWS Dev");
                $("#centerProjectName").text("Microsoft Azure Dev");
                $("#rightProjectName").text("Cloud Overview");


                $("#leftPic").attr("src", "./img/left/aws.png");
                $("#centerPic").attr("src", "./img/center/azure.jpg");
                $("#rightPic").attr("src", "./img/right/cloud.jpg");



                $("#leftPicLink").attr("href", "./overview.html#Cloud")
                $("#leftDescription").attr("href", "./overview.html#Cloud")
                $("#leftDescription").text("View AWS Project")

                $("#centerPicLink").attr("href", "./overview.html#Cloud")
                $("#centerDescription").attr("href", "./overview.html#Cloud")
                $("#centerDescription").text("View Azure Project")

                $("#rightPicLink").attr("href", "./overview.html#Cloud")
                $("#rightDescription").attr("href", "./overview.html#Cloud")
                $("#rightDescription").text("Cloud Overview")
                break;

            case "GIS":
                $("#leftProjectName").text("GIS Project #1");
                $("#centerProjectName").text("GIS Project #2");
                $("#rightProjectName").text("GIS Overview");

                $("#leftPic").attr("src", "./img/left/esri.png");
                $("#centerPic").attr("src", "./img/center/googlemapslogo.png");
                $("#rightPic").attr("src", "./img/right/globe.jpg");

                $("#leftPicLink").attr("href", "./overview.html#GIS")
                $("#leftDescription").attr("href", "./overview.html#GIS")
                $("#leftDescription").text("View GIS Project")

                $("#centerPicLink").attr("href", "./overview.html#GIS")
                $("#centerDescription").attr("href", "./overview.html#GIS")
                $("#centerDescription").text("View GIS Project")

                $("#rightPicLink").attr("href", "./overview.html#GIS")
                $("#rightDescription").attr("href", "./overview.html#GIS")
                $("#rightDescription").text("GIS Overview")
                break;

            case "Web":
                $("#leftProjectName").text("Web Project #1");
                $("#centerProjectName").text("Web Project #2");
                $("#rightProjectName").text("Web Overview");

                $("#leftPic").attr("src", "./img/left/web1.jpg");
                $("#centerPic").attr("src", "./img/center/web2.jpg");
                $("#rightPic").attr("src", "./img/right/web3.jpg");

                $("#leftPicLink").attr("href", "./overview.html#Web")
                $("#leftDescription").attr("href", "./overview.html#Web")
                $("#leftDescription").text("View Web Project")

                $("#centerPicLink").attr("href", "./overview.html#Web")
                $("#centerDescription").attr("href", "./overview.html#Web")
                $("#centerDescription").text("View Web Project")

                $("#rightPicLink").attr("href", "./overview.html#Web")
                $("#rightDescription").attr("href", "./overview.html#Web")
                $("#rightDescription").text("View Web Project")
                break;
            case "Certified":
                $("#leftProjectName").text("Amazon AWS");
                $("#centerProjectName").text("Microsoft");
                $("#rightProjectName").text("Certifications Overview");

                $("#leftPic").attr("src", "./img/left/aws.png");
                $("#centerPic").attr("src", "./img/center/mcse.gif");
                $("#rightPic").attr("src", "./img/right/cert.png");

                $("#leftPicLink").attr("href", "https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=3DNKSDEKCNR1QZGW")
                $("#leftDescription").attr("href", "https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=3DNKSDEKCNR1QZGW")
                $("#leftDescription").text("View AWS Transcript")

                // Since it is a PDF, let's open it in a new tab
                $("#centerDescription").attr("target", "_blank")
                $("#centerPicLink").attr("target", "_blank")
                $("#centerPicLink").attr("href", "https://s3-us-west-2.amazonaws.com/udacity-jenness/MS_Learning_Transcript.PDF")
                $("#centerDescription").attr("href", "https://s3-us-west-2.amazonaws.com/udacity-jenness/MS_Learning_Transcript.PDF")
                $("#centerDescription").text("View Microsoft Transcript")

                $("#rightPicLink").attr("href", "./overview.html#Certified")
                $("#rightDescription").attr("href", "./overview.html#Certified")
                $("#rightDescription").text("Click for info")
                break;
            default:

        }

    });

});