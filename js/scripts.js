

$(document).ready(function () {

    $(".skillButton").click(function () {
        var title = $(this).text().trim();

        switch (title) {
            case "Database":
                $("#leftProjectName").text("Database Dev");
                $("#centerProjectName").text("Database Dev");
                $("#rightProjectName").text("Database Dev");

                break;
            case 'iOS':
                $("#leftProjectName").text("iOS Dev");
                $("#centerProjectName").text("iOS Dev");
                $("#rightProjectName").text("iOS Dev");
                break;
            case "Android":
                $("#leftProjectName").text("Android Dev");
                $("#centerProjectName").text("Android Dev");
                $("#rightProjectName").text("Android Dev");
                break;
            case "Cloud":
                $("#leftProjectName").text("Cloud Dev");
                $("#centerProjectName").text("Cloud Dev");
                $("#rightProjectName").text("Cloud Dev");
                break;

            case "GIS":
                $("#leftProjectName").text("GIS Dev");
                $("#centerProjectName").text("GIS Dev");
                $("#rightProjectName").text("GIS Dev");
                break;

            case "Web":
                $("#leftProjectName").text("Web Dev");
                $("#centerProjectName").text("Web Dev");
                $("#rightProjectName").text("Web Dev");
                break;
            case "Certified":
                $("#leftProjectName").text("Microsoft Transcript");
                $("#centerProjectName").text("Amazon AWS Transcript");
                $("#rightProjectName").text("Other Certifications");
                break;
            default:
                alert(title);
        }

    });

});