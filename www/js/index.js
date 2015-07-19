/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        var doRefresh = $("#refresh").val();
        if ( doRefresh == 'yes' ) {
            navigator.app.exitApp();
        } else {
            $('#refresh').val('yes');
        }
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // window.location = "http://apecar.adcoop.it/";
        app.receivedEvent('deviceready');
        // navigator.app.exitApp();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		
		
		var doRefresh = $("#refreshed").val();
        if ( doRefresh == 'no' ) {
			$("#refreshed").val('yes');
			listeningElement.setAttribute('style', 'display:none;');
			receivedElement.setAttribute('style', 'display:block;');
            //navigator.app.exitApp();
        } else {
			$("#refreshed").val('no');
			var backMsg = "Premi 'indietro' per uscire";
        	listeningElement.setAttribute('style', 'display:block;');
        	listeningElement.innerHTML = backMsg;			
			receivedElement.setAttribute('style', 'display:none;');
		}

		/*
		var e=parentElement.getElementById("refreshed");
		if(e.value=="no"){
			e.value="yes";
			listeningElement.setAttribute('style', 'display:none;');
		} else {
			e.value="no";
			var backMsg = "Premi 'indietro' per uscire";
			listeningElement.innerHTML = backMsg;
			listeningElement.setAttribute('style', 'display:block;');
			//document.getElementById("listening").innerHTML = backMsg;
			// location.reload();
		}
		*/
		
		//listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);
    }
};
