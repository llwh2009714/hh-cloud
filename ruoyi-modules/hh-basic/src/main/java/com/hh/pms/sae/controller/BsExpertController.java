package com.hh.pms.sae.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.hh.pms.sae.domain.BsExpert;
import com.hh.pms.sae.service.IBsExpertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ruoyi.common.log.annotation.Log;
import com.ruoyi.common.log.enums.BusinessType;
import com.ruoyi.common.security.annotation.RequiresPermissions;
import com.ruoyi.common.core.web.controller.BaseController;
import com.ruoyi.common.core.web.domain.AjaxResult;
import com.ruoyi.common.core.utils.poi.ExcelUtil;
import com.ruoyi.common.core.web.page.TableDataInfo;

/**
 * 专家Controller
 *
 * @author ruoyi
 * @date 2023-11-19
 */
@RestController
@RequestMapping("/expert")
public class BsExpertController extends BaseController {
    @Autowired
    private IBsExpertService bsExpertService;

    /**
     * 查询专家列表
     */
//    @RequiresPermissions("system:expert:list")
    @GetMapping("/list")
    public TableDataInfo list(BsExpert bsExpert) {
        startPage();
        List<BsExpert> list = bsExpertService.selectBsExpertList(bsExpert);
        return getDataTable(list);
    }

    /**
     * 导出专家列表
     */
    @RequiresPermissions("system:expert:export")
    @Log(title = "专家", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, BsExpert bsExpert) {
        List<BsExpert> list = bsExpertService.selectBsExpertList(bsExpert);
        ExcelUtil<BsExpert> util = new ExcelUtil<BsExpert>(BsExpert.class);
        util.exportExcel(response, list, "专家数据");
    }

    /**
     * 获取专家详细信息
     */
    @GetMapping(value = "/{jid}")
    public AjaxResult getInfo(@PathVariable("jid") Long jid) {
        return success(bsExpertService.selectBsExpertByJid(jid));
    }

    /**
     * 新增专家
     */
    @RequiresPermissions("system:expert:add")
    @Log(title = "专家", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody BsExpert bsExpert) {
        return toAjax(bsExpertService.insertBsExpert(bsExpert));
    }

    /**
     * 修改专家
     */
    @Log(title = "专家", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody BsExpert bsExpert) {
        return toAjax(bsExpertService.updateBsExpert(bsExpert));
    }

    /**
     * 删除专家
     */
    @RequiresPermissions("system:expert:remove")
    @Log(title = "专家", businessType = BusinessType.DELETE)
    @DeleteMapping("/{jids}")
    public AjaxResult remove(@PathVariable Long[] jids) {
        return toAjax(bsExpertService.deleteBsExpertByJids(jids));
    }
}
