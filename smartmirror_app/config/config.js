/* SmartMirror Config 
 *

 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/India-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third '
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Nasik',
				locationID: '1261731',  //ID from http://www.openweathermap.org
				appid: 'e46e1fa3b2e0e6d910f5618711021be2'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Nasik',
				locationID: '1261731',  //ID from http://www.openweathermap.org
				appid: 'e46e1fa3b2e0e6d910f5618711021be2'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
					title: "News",
					//url: "https://news.google.com/news?cf=all&hl=hi&ned=hi_in&output=rss"
					//url:"https://news.google.com.hk/news?cf=all&hl=zh-TW&pz=1&ned=hk&output=rss"
					url:"https://news.google.co.in/news?cf=all&hl=en&pz=1&ned=in&output=rss"
                                        //url:"https://news.google.com.eg/news?cf=all&hl=ar&pz=1&ned=ar_eg&output=rss" 


					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
