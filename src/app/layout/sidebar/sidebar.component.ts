import { Component, effect, signal } from '@angular/core';

interface SidebarItem {
  label: string;
  icon: string;
  id: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected readonly activeItemId = signal('business-blocks');
  protected readonly collapsed = signal(false);

  constructor() {
    effect(() => {
      document.documentElement.style.setProperty(
        '--ef-sidebar-width',
        this.collapsed() ? '72px' : '280px',
      );
    });
  }

  protected readonly menuItems: SidebarItem[] = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: 'pi pi-th-large' },
    { id: 'bookings', label: 'الحجوزات', icon: 'pi pi-calendar' },
    { id: 'halls', label: 'القاعات والمرافق', icon: 'pi pi-building' },
    { id: 'events', label: 'الفعاليات', icon: 'pi pi-star' },
    { id: 'business-blocks', label: 'Business Blocks', icon: 'pi pi-box' },
    { id: 'companies', label: 'الشركات والعملاء', icon: 'pi pi-briefcase' },
    { id: 'contacts', label: 'جهات الاتصال', icon: 'pi pi-users' },
    { id: 'contracts', label: 'العقود', icon: 'pi pi-file' },
    { id: 'services', label: 'الخدمات', icon: 'pi pi-cog' },
    { id: 'pricing', label: 'التسعير والعروض', icon: 'pi pi-tag' },
    { id: 'invoices', label: 'الفواتير', icon: 'pi pi-receipt' },
    { id: 'payments', label: 'المدفوعات', icon: 'pi pi-credit-card' },
    { id: 'reports', label: 'التقارير', icon: 'pi pi-chart-bar' },
    { id: 'settings', label: 'الإعدادات', icon: 'pi pi-sliders-h' },
  ];

  protected setActive(id: string): void {
    this.activeItemId.set(id);
  }

  protected toggleCollapse(): void {
    this.collapsed.update((value) => !value);
  }
}
