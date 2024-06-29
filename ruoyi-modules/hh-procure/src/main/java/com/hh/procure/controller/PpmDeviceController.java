package com.hh.procure.controller;

import com.hh.procure.domain.PpmDevice;
import com.hh.procure.service.IPpmDeviceService;
import com.ruoyi.common.core.utils.poi.ExcelUtil;
import com.ruoyi.common.core.web.controller.BaseController;
import com.ruoyi.common.core.web.domain.AjaxResult;
import com.ruoyi.common.core.web.page.TableDataInfo;
import com.ruoyi.common.log.annotation.Log;
import com.ruoyi.common.log.enums.BusinessType;
import com.ruoyi.common.security.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 设备信息Controller
 *
 * @author ruoyi
 * @date 2023-11-28
 */
@RestController
@RequestMapping("/device")
public class PpmDeviceController extends BaseController {
    @Autowired
    private IPpmDeviceService ppmDeviceService;

    /**
     * 查询设备信息列表
     */
    //@RequiresPermissions("system:device:list")
    @GetMapping("/list")
    public TableDataInfo list(PpmDevice ppmDevice) {
        startPage();
        List<PpmDevice> list = ppmDeviceService.selectPpmDeviceList(ppmDevice);
        return getDataTable(list);
    }

    /**
     * 导出设备信息列表
     */
    //@RequiresPermissions("system:device:export")
    @Log(title = "设备信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, PpmDevice ppmDevice) {
        List<PpmDevice> list = ppmDeviceService.selectPpmDeviceList(ppmDevice);
        ExcelUtil<PpmDevice> util = new ExcelUtil<PpmDevice>(PpmDevice.class);
        util.exportExcel(response, list, "设备信息数据");
    }

    /**
     * 获取设备信息详细信息
     */
    //@RequiresPermissions("system:device:query")
    @GetMapping(value = "/{tid}")
    public AjaxResult getInfo(@PathVariable("tid") String tid) {
        return success(ppmDeviceService.selectPpmDeviceByTid(tid));
    }

    /**
     * 新增设备信息
     */
    //@RequiresPermissions("system:device:add")
    @Log(title = "设备信息", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody PpmDevice ppmDevice) {
        return toAjax(ppmDeviceService.insertPpmDevice(ppmDevice));
    }

    /**
     * 修改设备信息
     */
    //@RequiresPermissions("system:device:edit")
    @Log(title = "设备信息", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody PpmDevice ppmDevice) {
        return toAjax(ppmDeviceService.updatePpmDevice(ppmDevice));
    }

    /**
     * 删除设备信息
     */
    //@RequiresPermissions("system:device:remove")
    @Log(title = "设备信息", businessType = BusinessType.DELETE)
    @DeleteMapping("/{tids}")
    public AjaxResult remove(@PathVariable String[] tids) {
        return toAjax(ppmDeviceService.deletePpmDeviceByTids(tids));
    }

}
