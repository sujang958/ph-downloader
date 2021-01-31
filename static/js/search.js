// $("#submit-btn").click(() => {
//     $.get(`/search?q=${$('#search-q-input').val()}`, data => {
//         console.log(data);
//     });
// })


    //     for (var i = 0; i < json.results.length; i++) {
    //         // $("table.table > tbody").append(`
    //         // <tr>
    //         //     <th scope="row">${i + 1}</th>
    //         //     <td>${json.results[i].title}</td>
    //         //     <td>${json.results[i].link}</td>
    //         //     <td>ㅁㄴㅇㄻㄴㅇㄹㅇㅁㄴ</td>
    //         // </tr>
    //         // `)
    //         console.log(1);
    //         console.log(`
    //         <tr>
    //             <th scope="row">${i + 1}</th>
    //             <td>${json.results[i].title}</td>
    //             <td>${json.results[i].link}</td>
    //             <td>ㅁㄴㅇㄻㄴㅇㄹㅇㅁㄴ</td>
    //         </tr>
    //         `);
    //     }
    // })
    // // var results = await fetch(`/search?q=${$('#search-q-input').val()}`);
    // // results = await results.json()
    
    // // for (var i = 0; i < results.results.length; i++) {
    // //     $("table.table > tbody").append(`
    // //     <tr>
    // //         <th scope="row">${i + 1}</th>
    // //         <td>${results.results[i].title}</td>
    // //         <td>${results.results[i].link}</td>
    // //         <td>ㅁㄴㅇㄻㄴㅇㄹㅇㅁㄴ</td>
    // //     </tr>
    // //     `)
    // // }
$("#submit-btn").click(() => {
    var q = $("#basic-url\\ search-q-input").val();
    location.href = `/resultsPH?q=${q}`;
})