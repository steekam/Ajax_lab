var Equity = ["Upper Hill, Hospital Road", "Harambee Branch","Ground Flr, NHIF, Ragati Rd","Nairobi West"];
var KCB = ["KCB BIASHARA","KCB BURUBURU","KCB CAPITOL HILL","KCB EASTLEIGH","KCB GATEWAY"];
var Coop = ["CO-OP HOUSE", "DAGORETTI CORNER", "AGA KHAN WALK", " ATHI RIVER","BURUBURU"];
var Barclays = ["Barclays Westend Building","Hurlingham","Queens Way","Nairobi West","Yaya Center"];
var Cfc = ["Chiromo Branch","Galleria Branch","Kenyatta Ave Branch","Harambee Ave Branch","UpperHill Medical Center"];
var empty = [""];

$(document).ready( function(){
    //Question 1
    $("#banks").click(function (){
        var bank = $(this).val();
        if (bank == "Equity") {
            populate(Equity);            
        }else if(bank == "KCB"){
            populate(KCB);
        }else if(bank == "Co-op"){
            populate(Coop);
        } else if (bank == "Barclays") {
            populate(Barclays);
        } else if (bank == "Cfc") {
            populate(Cfc);
        }else{
            populate(empty);
        }
    });

    //Question 2
    $("#display-time").click(function(){
        $.get("date-time.php", function (data) {
            $("#display").html(data);            
        });
    });

    //Question 3
    $("#myform").submit(function (e) {
        e.preventDefault();
        var formData = {};
        $("#myform").find("input[name]").each(function (index, node) {
            formData[node.name] = node.value;
        });
        
        $.post("welcome.php",formData, function (data) {            
            $("#welcome").html("Welcome, "+ data);
        });
    });

    //Question 4
    $("#slideup").click(function () {
       $(".four").slideUp(); 
    });
    $("#slidedown").click(function () {
        $(".four").slideDown();
    });
    
    
    
});

function populate(thebank) {
    var branchhtml = "<option disabled>---Branches---</option>"
    thebank.forEach(element => {
        $("#branches").html(branchhtml + "<option>" + element + "</option>");
        branchhtml = $("#branches").html();
    });
}