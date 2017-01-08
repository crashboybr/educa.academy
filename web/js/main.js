// var peer = new Peer('bernardo', {key: 'ifu99gfqxdhrggb9'});
// console.log(peer);

// var conn = peer.connect('bernardo2');
// conn.on('open', function(){
//   conn.send('hi!');
// });

// peer.on('connection', function(conn) {
//   conn.on('data', function(data){
//     // Will print 'hi!'
//     console.log(data);
//   });
// });

// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// navigator.getUserMedia({video: true, audio: true}, function(stream) {
//   var call = peer.call('another-peers-id', stream);
//   call.on('stream', function(remoteStream) {
//     // Show stream in some <video> element.
//   });
// }, function(err) {
//   console.log('Failed to get local stream' ,err);
// });

// peer.on('call', function(call) {
//   navigator.getUserMedia({video: true, audio: true}, function(stream) {
//     call.answer(stream); // Answer the call with an A/V stream.
//     call.on('stream', function(remoteStream) {
//       // Show stream in some <video> element.
//     });
//   }, function(err) {
//     console.log('Failed to get local stream' ,err);
//   });
// });