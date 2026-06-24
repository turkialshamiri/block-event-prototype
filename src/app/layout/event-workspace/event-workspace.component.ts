import { Component } from '@angular/core';

interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-event-workspace',
  templateUrl: './event-workspace.component.html',
  styleUrl: './event-workspace.component.scss',
})
export class EventWorkspaceComponent {
  protected readonly eventStatuses: SelectOption[] = [
    { label: 'استفسار', value: 'inquiry' },
    { label: 'مبدئي', value: 'tentative' },
    { label: 'مؤكد', value: 'confirmed' },
    { label: 'ملغي', value: 'cancelled' },
    { label: 'مكتمل', value: 'completed' },
  ];

  protected readonly eventTypes: SelectOption[] = [
    { label: 'زفاف', value: 'wedding' },
    { label: 'مؤتمر', value: 'conference' },
    { label: 'اجتماع', value: 'meeting' },
    { label: 'معرض', value: 'exhibition' },
    { label: 'دورة تدريبية', value: 'training' },
    { label: 'فعالية شركات', value: 'corporate-event' },
    { label: 'فعالية اجتماعية', value: 'social-event' },
    { label: 'فعالية خاصة', value: 'private-event' },
  ];

  protected readonly defaultEventStatus = 'confirmed';
  protected readonly defaultEventType = 'wedding';
}
