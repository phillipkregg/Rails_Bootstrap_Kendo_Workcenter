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



	// Kendo viewmodel and datasource
	var viewModel = kendo.observable({
	    productsSource: new kendo.data.DataSource({
	        transport: {
	            read: {
	                url: crudServiceBaseUrl + "/jobs",
	                dataType: "json"
	            },
	            update: {
	                type: "PUT"
	                
	            },
	            destroy: {
	                type: "DELETE"
	            },
	            parameterMap: function(options, operation) {
	                if (operation !== "read" && options.models) {
	                    return {
	                        models: kendo.stringify(options.models)
	                    };
	                }
	                return options;
	            }
	        },
	        batch: true,
	        schema: {
	            model: {
	                id: "id"
	            }
	        }
	    }),
	    selectedProduct: null,
	    hasChanges: false,
	    save: function() {
	        this.productsSource.sync();
	        this.set("hasChanges", false);
	    },
	    remove: function() {
	        if (confirm("Are you sure you want to delete this product?")) {
	            this.productsSource.remove(this.selectedProduct);
	            this.set("selectedProduct", this.productsSource.view()[0]);
	            this.change();
	        }
	    },
	    showForm: function() {
	       return this.get("selectedProduct") !== null;
	    },
	    change: function() {
	        this.set("hasChanges", true);
	    }
	});
	
	kendo.bind($("#form-container"), viewModel);











});