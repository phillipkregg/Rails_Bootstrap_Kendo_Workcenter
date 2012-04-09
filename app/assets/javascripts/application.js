// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs



$(document).ready(function(){
	
	
	$('#logoutModal').modal('hide');
	
	$('#fnol_tabs').kendoTabStrip();

	var closeLogout = function(){
		$('#logout_modal.btn-primary').click(function(e){
			
			$('#logout_modal').modal('hide');
		})
		
	}
	
	var openLogout = function(){
		
		$('#logout_modal').modal('show');
	}



	// Kendo MVVM
	var jobViewModel = kendo.observable({
		
				
		
	});
	
	
	
	var jobSource = new kendo.data.DataSource({
			transport: {
				read: {
					url: "/jobs",
					dataType: "json"
				},
				update: {
					url: "/jobs.json",
					type: "PUT"
				},
				destroy: {
					type: "DELETE"
				},
				create: {
					url: "/jobs",
					dataType: "json",
					contentType: "application/json",
					type: "POST"
				},
				parameterMap: function(job, type) {
                        if (type === "create" || type === "update") {
                            return JSON.stringify({ job: job });
                        }
                    }
				
			},
			
			//batch: true,
			pageSize: 5,
			schema: {
				model: {
					id: "id",
					fields: {						
						last_name: { validation: {required: true}, nullable: false },
						first_name: { validation: {required: true}, nullable: false }
						
						
					}
				}
			}		
		})
	
	
	$("#job-grid").kendoGrid({
		dataSource: jobSource,
		navigatable: true,
		pageable: true,
		height: 300,
		toolbar: ["create", "save", "cancel"],
		columns: [
			{title: "Last Name", field: "last_name"},
			{title: "First Name", field: "first_name"}
		],
		editable: true,
		sortable: true
	});

	









});