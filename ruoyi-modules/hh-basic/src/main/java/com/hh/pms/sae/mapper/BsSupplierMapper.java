package com.hh.pms.sae.mapper;

import java.util.List;

import com.hh.pms.sae.domain.BidSubmission;
import com.hh.pms.sae.domain.BsSupplier;
import com.hh.pms.sae.domain.NobidNonPro;
import com.hh.pms.sae.domain.PpmDevice;
import org.apache.ibatis.annotations.Param;

/**
 * 供应商Mapper接口
 *
 * @author ruoyi
 * @date 2023-11-19
 */
public interface BsSupplierMapper {
    /**
     * 查询供应商
     *
     * @param hid 供应商主键
     * @return 供应商
     */
    public BsSupplier selectBsSupplierByHid(Long hid);

    /**
     * 根据准入id查询供应商
     *
     * @param zrId 供应商准入id
     * @return 供应商
     */
    public BsSupplier selectBsSupplierByZrId(Long zrId);

    /**
     * 查询合格供应商列表
     *
     * @param bsSupplier 供应商
     * @return 供应商集合
     */
    public List<BsSupplier> selectBsSupplierList(BsSupplier bsSupplier);

    /**
     * 查询不合格供应商列表
     *
     * @param bsSupplier 供应商
     * @return 供应商集合
     */
    public List<BsSupplier> selectNoBsSupplierList(BsSupplier bsSupplier);

    /**
     * 查询供应商不良记录列表
     *
     * @param bsSupplier 供应商
     * @return 供应商集合
     */
    public List<BsSupplier> selectBsSupplierBadList(BsSupplier bsSupplier);

    /**
     * 新增供应商
     *
     * @param bsSupplier 供应商
     * @return 结果
     */
    public int insertBsSupplier(BsSupplier bsSupplier);

    /**
     * 修改供应商
     *
     * @param bsSupplier 供应商
     * @return 结果
     */
    public int updateBsSupplier(BsSupplier bsSupplier);

    /**
     * 删除供应商
     *
     * @param hid 供应商主键
     * @return 结果
     */
    public int deleteBsSupplierByHid(Long hid);

    /**
     * 批量删除供应商
     *
     * @param hids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteBsSupplierByHids(Long[] hids);

    /**
     * 登录
     *
     * @param hLoginAccount
     * @param hPassword
     * @return
     */
    public BsSupplier loginSupplier(@Param("hLoginAccount") String hLoginAccount, @Param("hPassword") String hPassword);

    public BsSupplier onlyHCreditCode(String hCreditCode);

    //查询非招标项目
    public List<NobidNonPro> selectAllNoBid(NobidNonPro nobidNonPro);

    public NobidNonPro queryOneByCode(String code);

    public List<PpmDevice> listDev(Long gid);

    public List<BidSubmission> listSubmission(@Param("hid") Long hid, @Param("sName") String sName);
}
