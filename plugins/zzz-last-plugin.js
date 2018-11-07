BOOMR.init({
	beacon_url:"<Your Sumo Http Collector Url Goes Here>",
  	instrument_xhr: true,
	beacon_type:"POST", //changed beacon from GET to POST
	monitorGlobal:true, //Switch on errors plugin
	monitorNetwork:true, //Switch on errors plugin
	monitorEvents:true, //Switch on errors plugin
	sendAfterOnload:true //Switch on errors plugin


});
BOOMR.t_end = new Date().getTime();
