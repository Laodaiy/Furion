﻿// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

namespace Furion.Schedule;

/// <summary>
/// 作业执行记录持久上下文
/// </summary>
[SuppressSniffer]
public sealed class PersistenceExecutionRecordContext
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="jobDetail">作业信息</param>
    /// <param name="trigger">作业触发器</param>
    /// <param name="mode">触发模式</param>
    /// <param name="timeline">作业触发器运行记录</param>
    internal PersistenceExecutionRecordContext(JobDetail jobDetail
        , Trigger trigger
        , int mode
        , TriggerTimeline timeline)
    {
        JobId = jobDetail.JobId;
        JobDetail = jobDetail;
        TriggerId = trigger.TriggerId;
        Trigger = trigger;
        Mode = mode;

        Timeline = timeline;
    }

    /// <summary>
    /// 作业 Id
    /// </summary>
    public string JobId { get; }

    /// <summary>
    /// 作业信息
    /// </summary>
    public JobDetail JobDetail { get; }

    /// <summary>
    /// 作业触发器 Id
    /// </summary>
    public string TriggerId { get; }

    /// <summary>
    /// 作业触发器
    /// </summary>
    public Trigger Trigger { get; }

    /// <summary>
    /// 触发模式
    /// </summary>
    /// <remarks>默认为定时触发</remarks>
    public int Mode { get; }

    /// <summary>
    /// 作业触发器运行记录
    /// </summary>
    public TriggerTimeline Timeline { get; }

    /// <summary>
    /// 作业执行记录持久上下文转字符串输出
    /// </summary>
    /// <returns><see cref="String"/></returns>
    public override string ToString()
    {
        return $"{JobDetail} {Trigger}{(Mode == 1 ? " Manual" : string.Empty)} {Timeline.LastRunTime.ToFormatString()}{(Timeline.NextRunTime == null ? $" [{Timeline.Status}]" : $" -> {Timeline.NextRunTime.ToFormatString()}")} {Timeline.ElapsedTime}ms";
    }
}