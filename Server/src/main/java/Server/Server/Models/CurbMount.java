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
    private Integer size_code;
    private Integer glass_code;
    private String  shade_code;
    private Integer inside_curb_width;
    private Integer inside_curb_height;
    private Integer outside_curb_width;
    private Integer outside_curb_height;
    private Integer max_sky_clear_width;
    private Integer max_sky_clear_height;
    private Integer ecl_code;
    private Integer ecw_code;

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

    public Integer getSize_code() {
        return size_code;
    }

    public void setSize_code(Integer size_code) {
        this.size_code = size_code;
    }

    public Integer getGlass_code() {
        return glass_code;
    }

    public void setGlass_code(Integer glass_code) {
        this.glass_code = glass_code;
    }

    public String getShade_code() {
        return shade_code;
    }

    public void setShade_code(String shade_code) {
        this.shade_code = shade_code;
    }

    public Integer getInside_curb_width() {
        return inside_curb_width;
    }

    public void setInside_curb_width(Integer inside_curb_width) {
        this.inside_curb_width = inside_curb_width;
    }

    public Integer getInside_curb_height() {
        return inside_curb_height;
    }

    public void setInside_curb_height(Integer inside_curb_height) {
        this.inside_curb_height = inside_curb_height;
    }

    public Integer getOutside_curb_width() {
        return outside_curb_width;
    }

    public void setOutside_curb_width(Integer outside_curb_width) {
        this.outside_curb_width = outside_curb_width;
    }

    public Integer getOutside_curb_height() {
        return outside_curb_height;
    }

    public void setOutside_curb_height(Integer outside_curb_height) {
        this.outside_curb_height = outside_curb_height;
    }

    public Integer getMax_sky_clear_width() {
        return max_sky_clear_width;
    }

    public void setMax_sky_clear_width(Integer max_sky_clear_width) {
        this.max_sky_clear_width = max_sky_clear_width;
    }

    public Integer getMax_sky_clear_height() {
        return max_sky_clear_height;
    }

    public void setMax_sky_clear_height(Integer max_sky_clear_height) {
        this.max_sky_clear_height = max_sky_clear_height;
    }

    public Integer getEcl_code() {
        return ecl_code;
    }

    public void setEcl_code(Integer ecl_code) {
        this.ecl_code = ecl_code;
    }

    public Integer getEcw_code() {
        return ecw_code;
    }

    public void setEcw_code(Integer ecw_code) {
        this.ecw_code = ecw_code;
    }

}
