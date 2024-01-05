package com.hh.pms.service;

import com.hh.pms.domain.PpmFramePlan;

import java.util.List;

/**
 * 框架计划Service接口
 * 
 * @author ruoyi
 * @date 2023-11-19
 */
public interface IPpmFramePlanService 
{
    /**
     * 查询框架计划
     * 
     * @param jhId 框架计划主键
     * @return 框架计划
     */
    public PpmFramePlan selectPpmFramePlanByJhId(Long jhId);

    /**
     * 查询框架计划列表
     * 
     * @param ppmFramePlan 框架计划
     * @return 框架计划集合
     */
    public List<PpmFramePlan> selectPpmFramePlanList(PpmFramePlan ppmFramePlan);

    /**
     * 新增框架计划
     * 
     * @param ppmFramePlan 框架计划
     * @return 结果
     */
    public int insertPpmFramePlan(PpmFramePlan ppmFramePlan);

    /**
     * 修改框架计划
     * 
     * @param ppmFramePlan 框架计划
     * @return 结果
     */
    public int updatePpmFramePlan(PpmFramePlan ppmFramePlan);

    /**
     * 批量删除框架计划
     * 
     * @param jhIds 需要删除的框架计划主键集合
     * @return 结果
     */
    public int deletePpmFramePlanByJhIds(Long[] jhIds);

    /**
     * 删除框架计划信息
     * 
     * @param jhId 框架计划主键
     * @return 结果
     */
    public int deletePpmFramePlanByJhId(Integer jhId);

    public PpmFramePlan queryFrameworkPlanAndRelatedInformation(Integer jhId);

    public int updateFarmeworkPlanStatusByJhId(PpmFramePlan ppmFramePlan);
}
