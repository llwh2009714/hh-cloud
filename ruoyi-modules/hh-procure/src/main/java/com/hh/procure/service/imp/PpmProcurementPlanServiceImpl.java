package com.hh.procure.service.imp;

import com.hh.procure.Util.CodeRuleHelp;
import com.hh.procure.Util.CodeRuleUtil;
import com.hh.procure.domain.*;
import com.hh.procure.mapper.PpmProcurementPlanMapper;
import com.hh.procure.service.IPpmLineItemsService;
import com.hh.procure.service.IPpmProcurementPlanService;
import com.ruoyi.common.core.utils.DateUtils;
import com.ruoyi.system.api.domain.BidTender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 采购计划Service业务层处理
 *
 * @author ruoyi
 * @date 2023-11-28
 */
@Service
public class PpmProcurementPlanServiceImpl implements IPpmProcurementPlanService {

    @Autowired
    private PpmProcurementPlanMapper ppmProcurementPlanMapper;

    @Autowired
    private ComCodeRulesServiceImpl comCodeRulesService;

    @Autowired
    private IPpmLineItemsService ppmLineItemsService;


    /**
     * 查询采购计划
     *
     * @param aid 采购计划主键
     * @return 采购计划
     */
    @Override
    public PpmProcurementPlan selectPpmProcurementPlanByAid(Integer aid) {
        return ppmProcurementPlanMapper.selectPpmProcurementPlanByAid(aid);
    }

    /**
     * 查询采购计划列表
     *
     * @param ppmProcurementPlan 采购计划
     * @return 采购计划
     */
    @Override
    public List<PpmProcurementPlan> selectPpmProcurementPlanList(PpmProcurementPlan ppmProcurementPlan) {
        return ppmProcurementPlanMapper.selectPpmProcurementPlanList(ppmProcurementPlan);
    }

    /**
     * 新增采购计划
     *
     * @param ppmProcurementPlan 采购计划
     * @return 结果
     */
    @Override
    public int insertPpmProcurementPlan(PpmProcurementPlan ppmProcurementPlan) {
        ppmProcurementPlan.setCreateTime(DateUtils.getNowDate());
        ppmProcurementPlanMapper.insertPpmProcurementPlan(ppmProcurementPlan);
        List<PpmLineItems> items = ppmProcurementPlan.getItems();
        for (PpmLineItems item : items) {
            item.setAid(ppmProcurementPlan.getAid());
            ComCodeRules rules = comCodeRulesService.selectComCodeRulesByTargetForm(CodeRuleUtil.LINEITEM);
            CodeRulesResult result = CodeRuleHelp.GetCodeRule(rules);
            item.setvCode(result.getCode());
            ppmLineItemsService.insertPpmLineItems(item);
            rules.setMaxMantissa(result.getMax());
            comCodeRulesService.updateComCodeRules(rules);
        }
        return 1;
    }

    /**
     * 修改采购计划
     *
     * @param ppmProcurementPlan 采购计划
     * @return 结果
     */
    @Override
    public int updatePpmProcurementPlan(PpmProcurementPlan ppmProcurementPlan) {
        ppmProcurementPlan.setUpdateTime(DateUtils.getNowDate());
        return ppmProcurementPlanMapper.updatePpmProcurementPlan(ppmProcurementPlan);
    }

    /**
     * 批量删除采购计划
     *
     * @param aids 需要删除的采购计划主键
     * @return 结果
     */
    @Override
    public int deletePpmProcurementPlanByAids(Integer[] aids) {
        return ppmProcurementPlanMapper.deletePpmProcurementPlanByAids(aids);
    }

    /**
     * 删除采购计划信息
     *
     * @param aid 采购计划主键
     * @return 结果
     */
    @Override
    public int deletePpmProcurementPlanByAid(Integer aid) {
        return ppmProcurementPlanMapper.deletePpmProcurementPlanByAid(aid);
    }

    /**
     * 根据id查询多表
     *
     * @param aid 采购计划主键
     * @return
     */
    @Override
    public PpmProcurementPlan selectProcurementPlanByIdForThreeTables(Integer aid) {
        return ppmProcurementPlanMapper.selectProcurementPlanByIdForThreeTables(aid);
    }

    @Override
    public int insertTenders(BidTender bidTender) {
        return ppmProcurementPlanMapper.insertTenders(bidTender);
    }

    @Override
    public List<PpmProcurementPlan> FindProcurementPlanBy(PpmProcurementPlan ppmProcurementPlan) {
        return ppmProcurementPlanMapper.FindProcurementPlanBy(ppmProcurementPlan);
    }

    @Override
    public List<PpmProcurementPlan> selectePpmProcurementPlanAndComPubAttamentByAid(PpmProcurementPlan ppmProcurementPlan) {
        return ppmProcurementPlanMapper.selectePpmProcurementPlanAndComPubAttamentByAid(ppmProcurementPlan);
    }

    @Override
    public int insertNoBidPro(NobidNonPro nobidNonPro) {
        return ppmProcurementPlanMapper.insertNoBidPro(nobidNonPro);
    }

    /**
     *
     * @param state
     * @return
     */
    @Override
    public int selectPpmpProcurementCount(PpmProcurementPlan state) {
        return ppmProcurementPlanMapper.selectPpmpProcurementCount(state);
    }

    @Override
    public int selectContractCount() {
        return ppmProcurementPlanMapper.selectContractCount();
    }

    @Override
    public Double queryTotalPurchaseAmount() {
        return ppmProcurementPlanMapper.queryTotalPurchaseAmount();
    }

    @Override
    public int selectTenderCount() {
        return ppmProcurementPlanMapper.selectTenderCount();
    }

    @Override
    public List<BidTender> selectTenderByState(BidTender bidTender) {
        return ppmProcurementPlanMapper.selectTenderByState(bidTender);
    }

    @Override
    public int selectTenderByStateCount(BidTender bidTender) {
        return ppmProcurementPlanMapper.selectTenderByStateCount(bidTender);
    }
}
