class CreatePostsAndProjects < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
    end

    create_table :projects do |t|
    end

    create_table :tags do |t|
      t.string :name
    end

    create_table :post_tags do |t|
      t.belongs_to :post
      t.belongs_to :tag
    end

  end
end

