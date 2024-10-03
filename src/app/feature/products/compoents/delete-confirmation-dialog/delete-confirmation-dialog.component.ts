import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
})
export class DeleteConfirmationDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) {}

  // Close dialog
  onCancel(): void {
    this.dialogRef.close(false);
  }

  // Trigger delete action
  onDelete(): void {
    this.dialogRef.close(true);
  }
}
