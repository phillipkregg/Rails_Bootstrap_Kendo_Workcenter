class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :last_name
      t.string :first_name
      t.string :loss_city
      t.string :job_type
      t.string :insurance_company
      t.string :age
      t.date :loss_date
      t.string :job_number
      t.string :job_status
      t.string :dispatch_status
      t.string :caller
      t.string :occupant
      t.string :production_manager

      t.timestamps
    end
  end
end
