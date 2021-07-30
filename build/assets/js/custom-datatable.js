$(document).ready(function () {
  $('#datatable').dataTable();

  $('#datatable2').DataTable({
    dom: 'Bfrtip',
    buttons: ['copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5'],
  });

  $('#datatable3').DataTable({
    scrollY: '400px',
    scrollCollapse: true,
    paging: false,
  });
});
