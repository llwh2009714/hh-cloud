package com.hh.pms.sae.service;

import java.util.List;

import com.hh.pms.sae.domain.BsExpert;

/**
 * 专家Service接口
 *
 * @author ruoyi
 * @date 2023-11-19
 */
public interface IBsExpertService {
    /**
     * 查询专家
     *
     * @param jid 专家主键
     * @return 专家
     */
    public BsExpert selectBsExpertByJid(Long jid);

    /**
     * 查询专家列表
     *
     * @param bsExpert 专家
     * @return 专家集合
     */
    public List<BsExpert> selectBsExpertList(BsExpert bsExpert);

    /**
     * 新增专家
     *
     * @param bsExpert 专家
     * @return 结果
     */
    public int insertBsExpert(BsExpert bsExpert);

    /**
     * 修改专家
     *
     * @param bsExpert 专家
     * @return 结果
     */
    public int updateBsExpert(BsExpert bsExpert);

    /**
     * 批量删除专家
     *
     * @param jids 需要删除的专家主键集合
     * @return 结果
     */
    public int deleteBsExpertByJids(Long[] jids);

    /**
     * 删除专家信息
     *
     * @param jid 专家主键
     * @return 结果
     */
    public int deleteBsExpertByJid(Long jid);
}
