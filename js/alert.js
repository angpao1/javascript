function sweet() {
  swal("Good job!", "You clicked the button!", "success");
}

function wrt() {
  swal({
    title: '10 + 5 = ?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '15',
    cancelButtonText: '30',
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

function emi() {
  swal({
    title: 'กรอกอีเมล์ที่ต้องการส่ง',
    input: 'email',
    showCancelButton: true,
    confirmButtonText: 'ส่ง',
    cancelButtonText: 'ยกเลิก',
    showLoaderOnConfirm: true,
    preConfirm: (email) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (email === 'taken@example.com') {
            swal.showValidationError(
              'This email is already taken.'
            )
          }
          resolve()
        }, 2000)
      })
    },
    allowOutsideClick: false
  }).then((result) => {
    if (result.value) {
      swal({
        type: 'success',
        title: 'ส่งข้อมูลสำเร็จ!',
        html: 'ส่งข้อมูลไป: ' + result.value
      })
    }
  })
}

