import {Component} from '@angular/core';
import {Proposal} from './proposal';

@Component ({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.kjroberts.com', 'Ruby on Rails', 150, 120, 15, 'kj@bottega.com')
	proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://portfolio.kjroberts.com', 'Ruby on Rails', 150, 120, 15, 'kj@bottega.com')
	proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://portfolio.kjroberts.com', 'Ruby on Rails', 150, 120, 15, 'kj@bottega.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
	]
}