import { Component, inject } from '@angular/core';
import { LayoutUiService } from '../../core/layout-ui.service';

interface EventSummaryItem {
  label: string;
  value: string;
  icon: string;
  badge?: 'green';
}

@Component({
  selector: 'app-event-summary-panel',
  templateUrl: './event-summary-panel.component.html',
  styleUrl: './event-summary-panel.component.scss',
})
export class EventSummaryPanelComponent {
  protected readonly layoutUi = inject(LayoutUiService);

  protected readonly items: EventSummaryItem[] = [
    { label: 'رقم الفعالية', value: 'EVT-2027-000145', icon: 'pi pi-hashtag' },
    { label: 'نوع الفعالية', value: 'زفاف', icon: 'pi pi-tag' },
    { label: 'القاعة', value: 'القاعة الملكية', icon: 'pi pi-building' },
    { label: 'التاريخ', value: '15 أكتوبر 2027', icon: 'pi pi-calendar' },
    { label: 'الوقت', value: '06:00 م - 11:00 م', icon: 'pi pi-clock' },
    { label: 'الحالة', value: 'مؤكد', icon: 'pi pi-check-circle', badge: 'green' },
    { label: 'الحضور المتوقع', value: '250', icon: 'pi pi-users' },
    { label: 'الإيراد المتوقع', value: '25,000 ريال', icon: 'pi pi-wallet' },
  ];

  protected readonly completionPercent = 0;
}
