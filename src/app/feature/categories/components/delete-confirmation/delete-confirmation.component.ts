import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  @Input() itemName: string | null = null;  // The name of the item being deleted
  @Output() confirmDelete = new EventEmitter<void>();  // Emit event when confirmed
  @Output() cancelDelete = new EventEmitter<void>();   // Emit event when cancelled

  // Trigger confirm action
  onConfirm() {
    this.confirmDelete.emit();
  }

  // Trigger cancel action
  onCancel() {
    this.cancelDelete.emit();
  }
}
