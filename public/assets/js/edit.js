  $("#update").on('click', function (event) {
    event.preventDefault();
      
    const newPhone = $('#phone').val().trim();
    const formattedPhone = (`+1${newPhone}`);
    const newMessage = $('#message').val().trim();
    // const newDate = $('#datePicker').val().trim();
    // const formattedDate = moment(newDate, ['MMM DD, YYYY']).format('YYYY-MM-DD');
    // const newTime = $('#timePicker').val();
    // const formattedTime = moment(newTime, ['h:mm A']).format('HH:mm');
    const newDate = `${$('#selectedMonth').val()} ${$('#selectedDay').val()}, ${$('#selectedYear').val()}`;
    const formattedDate = moment(newDate, ['MM DD, YYYY']).format('YYYY-MM-DD');
    const newTime = `${$('#selectedHour').val()}:${$('#selectedMinute').val()} ${$('#selectedAMPM').val()}`;
    const formattedTime = moment(newTime, ['hh:mm A']).format('HH:mm');
    const dateTime = `${formattedDate} ${formattedTime}`;
    const formattedDateTime = moment(dateTime, ['YYYY-MM-DD HH:mm']).format('YYYY-MM-DD HH:mm');

    const messageId = window.location.href.split('edit/')[1];

    $.ajax({
      method: 'PUT',
      url: '/edit/' +messageId,
      data: {
        phone_number: formattedPhone,
        outgoing_message: newMessage,
        // scheduled_date: formattedDate,
        // scheduled_time: formattedTime,
        scheduled_send: formattedDateTime,
      },
    }).then(function(toTheServer) {
      console.log(toTheServer);
    });
  });