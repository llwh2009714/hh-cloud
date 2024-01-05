package com.hh.pms.cm.service;

import com.hh.pms.cm.domain.BsSign;

import java.util.List;

/**
 * 签署执行状态Service接口
 *
 * @author ruoyi
 * @date 2023-11-30
 */
public interface IBsSignService
{
    /**
     * 查询签署执行状态
     *
     * @param gnId 签署执行状态主键
     * @return 签署执行状态
     */
    public BsSign selectBsSignByGnId(Long gnId);

    //根据合同查看签署执行状态信息
    public BsSign selectBsSignByEid(Long eid);

    /**
     * 查询签署执行状态列表
     *
     * @param bsSign 签署执行状态
     * @return 签署执行状态集合
     */
    public List<BsSign> selectBsSignList(BsSign bsSign);

    /**
     * 新增签署执行状态
     *
     * @param bsSign 签署执行状态
     * @return 结果
     */
    public int insertBsSign(BsSign bsSign);

    /**
     * 修改签署执行状态
     *
     * @param bsSign 签署执行状态
     * @return 结果
     */
    public int updateBsSign(BsSign bsSign);

    /**
     * 批量删除签署执行状态
     *
     * @param gnIds 需要删除的签署执行状态主键集合
     * @return 结果
     */
    public int deleteBsSignByGnIds(Long[] gnIds);

    /**
     * 删除签署执行状态信息
     */
    public int deleteBsSignByGnId(Long gnId);

    public int deleteBsSignByEid(Long eid);

}