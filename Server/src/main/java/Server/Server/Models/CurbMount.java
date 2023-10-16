package Server.Server.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class CurbMount {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id_curbmount;
    private String curbmount_code;
    private String size_code;
    private Float outside_curb_width;
    private Float outside_curb_height;
    private Float max_sky_clear_width;
    private Float max_sky_clear_height;
    private String photo;

    public Integer getId_curbmount() {
        return id_curbmount;
    }

    public void setId_curbmount(Integer id_curbmount) {
        this.id_curbmount = id_curbmount;
    }

    public String getCurbmount_code() {
        return curbmount_code;
    }

    public void setCurbmount_code(String curbmount_code) {
        this.curbmount_code = curbmount_code;
    }

    public String getSize_code() {
        return size_code;
    }

    public void setSize_code(String size_code) {
        this.size_code = size_code;
    }

    public Float getOutside_curb_width() {
        return outside_curb_width;
    }

    public void setOutside_curb_width(Float outside_curb_width) {
        this.outside_curb_width = outside_curb_width;
    }

    public Float getOutside_curb_height() {
        return outside_curb_height;
    }

    public void setOutside_curb_height(Float outside_curb_height) {
        this.outside_curb_height = outside_curb_height;
    }

    public Float getMax_sky_clear_width() {
        return max_sky_clear_width;
    }

    public void setMax_sky_clear_width(Float max_sky_clear_width) {
        this.max_sky_clear_width = max_sky_clear_width;
    }

    public Float getMax_sky_clear_height() {
        return max_sky_clear_height;
    }

    public void setMax_sky_clear_height(Float max_sky_clear_height) {
        this.max_sky_clear_height = max_sky_clear_height;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }


}
