function sweet() {
    swal("Good job!", "You clicked the button!", "success");
}

function wrt() {
    swal({
        title: '1 + 1 = ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '2',
        cancelButtonText: '3',
        buttonsStyling: false,
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swal(
            'คำตอบถูกต้อง!',
            '',
            'success'
          )
        // result.dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        } else if (result.dismiss === 'cancel') {
          swal(
            'คำตอบผิด!',
            '',
            'error'
          )
        }
      })
}