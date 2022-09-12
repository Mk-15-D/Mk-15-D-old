


{1 : [], 2 : [], 3 : [], 4 : [], 5 : [], 6 : [], 7 : [], 8 : ["Yes", "No", "Optional"], 9 : ["Yes", "No"], 10 : [], 11 : [], 12 : [], 13 : [],}



function getUniqueValuesFromColumn() {

var unique_col_values_dict = {}

allFilters = document.querySelectorAll(".table-filter")
allFilters.forEach((filter_i) => {
    col_index = filter_i.parentElement.getAttribute("col-index");
    alert(col_index)

    const rows = ducument.querySelectorAll("#table-1 > tbody > tr")

    rows.forEach((row) => {
        console.log(row.quesrySelector("td:nth-child("+col_index+")"));
    });
});

};