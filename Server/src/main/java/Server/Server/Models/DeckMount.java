package Server.Server.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DeckMount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id_deckmount;
    private String deckmount_code;
    private String size_code;
    private Float outside_frame_width;
    private Float outside_frame_height;
    private Float rough_opening_width;
    private Float rough_opening_height;
    private String photo;

    public Integer getId_deckmount() {
        return id_deckmount;
    }

    public void setId_deckmount(Integer id_deckmount) {
        this.id_deckmount = id_deckmount;
    }

    public String getDeckmount_code() {
        return deckmount_code;
    }

    public void setDeckmount_code(String deckmount_code) {
        this.deckmount_code = deckmount_code;
    }

    public String getSize_code() {
        return size_code;
    }

    public void setSize_code(String size_code) {
        this.size_code = size_code;
    }

    public Float getOutside_frame_width() {
        return outside_frame_width;
    }

    public void setOutside_frame_width(Float outside_frame_width) {
        this.outside_frame_width = outside_frame_width;
    }

    public Float getOutside_frame_height() {
        return outside_frame_height;
    }

    public void setOutside_frame_height(Float outside_frame_height) {
        this.outside_frame_height = outside_frame_height;
    }

    public Float getRough_opening_width() {
        return rough_opening_width;
    }

    public void setRough_opening_width(Float rough_opening_width) {
        this.rough_opening_width = rough_opening_width;
    }

    public Float getRough_opening_height() {
        return rough_opening_height;
    }

    public void setRough_opening_height(Float rough_opening_height) {
        this.rough_opening_height = rough_opening_height;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
