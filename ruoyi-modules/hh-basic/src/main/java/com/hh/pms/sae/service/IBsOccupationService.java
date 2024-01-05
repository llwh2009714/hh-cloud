package com.hh.pms.sae.service;

import java.util.List;

import com.hh.pms.sae.domain.BsOccupation;

/**
 * 职业Service接口
 *
 * @author ruoyi
 * @date 2023-11-19
 */
public interface IBsOccupationService {
    /**
     * 查询职业
     *
     * @param nid 职业主键
     * @return 职业
     */
    public BsOccupation selectBsOccupationByNid(Long nid);

    /**
     * 查询职业列表
     *
     * @param bsOccupation 职业
     * @return 职业集合
     */
    public List<BsOccupation> selectBsOccupationList(BsOccupation bsOccupation);

    /**
     * 新增职业
     *
     * @param bsOccupation 职业
     * @return 结果
     */
    public int insertBsOccupation(BsOccupation bsOccupation);

    /**
     * 修改职业
     *
     * @param bsOccupation 职业
     * @return 结果
     */
    public int updateBsOccupation(BsOccupation bsOccupation);

    /**
     * 批量删除职业
     *
     * @param nids 需要删除的职业主键集合
     * @return 结果
     */
    public int deleteBsOccupationByNids(Long[] nids);

    /**
     * 删除职业信息
     *
     * @param nid 职业主键
     * @return 结果
     */
    public int deleteBsOccupationByNid(Long nid);
}
