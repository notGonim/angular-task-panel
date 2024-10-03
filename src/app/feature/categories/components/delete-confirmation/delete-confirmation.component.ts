import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  @Input() itemName: string | null = null;  
  @Output() confirmDelete = new EventEmitter<void>();  
  @Output() cancelDelete = new EventEmitter<void>(); 

  // Trigger confirm action
  onConfirm() {
    this.confirmDelete.emit();
  }

  // Trigger cancel action
  onCancel() {
    this.cancelDelete.emit();
  }
}
