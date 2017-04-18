import { Component } from '@angular/core';
import { Document } from './document';
@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashoard"
	documents: Document[] = [
		{
			title: "My first doc",
			description: "lalalalallalaal",
			file_url: 'http://google.com',
			updated_at: '4/17/17',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
		},
		{
			title: "My second doc",
			description: "lalalalallalaal",
			file_url: 'http://google.com',
			updated_at: '4/17/17',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
		},
		{
			title: "My third doc",
			description: "lalalalallalaal",
			file_url: 'http://google.com',
			updated_at: '4/17/17',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
		}
	]
}