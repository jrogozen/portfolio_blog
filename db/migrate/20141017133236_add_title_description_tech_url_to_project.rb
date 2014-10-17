class AddTitleDescriptionTechUrlToProject < ActiveRecord::Migration
  def change
    add_column :projects, :title, :string
    add_column :projects, :url, :string
    add_column :projects, :description, :text
    add_column :projects, :tech, :string
  end
end
