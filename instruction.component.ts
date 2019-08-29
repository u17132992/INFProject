import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 


import { InstructionModel } from './instruction.model';
import { InstructionService } from './instruction.service';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionsComponent implements OnInit {

  instructions: InstructionModel[];
  currentinstruction: InstructionModel;

  constructor(
    private service: InstructionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[InstructionsComponent] ngOnInit()');
    this.currentinstruction = new InstructionModel();

    this.service.getInstructions()
      .then(res => {
        
        
          
        

        this.instructions = res;
        console.log('[InstructionsComponent | ngOnInit]');
       })
      .catch(err => console.log('error', err));


    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[InstructionsComponent | ngOnInit] data:', data);
      if (data) {
        this.instructions = data.instructions;
        this.currentinstruction = new InstructionModel();
      }
    });
  }

  findInstructions() {
    console.log('[InstructionsComponent | findInstructions]');
    this.service.findInstructions(this.currentinstruction.InstructionID)
      .then(res => {
        this.instructions = res;
       })
      .catch(err => console.log('error', err));
  }

  createInstruction() {
    console.log('[InstructionsComponent] in createInstruction()');
    return this.service.createInstruction(this.currentinstruction);
  }

  selectInstruction(id: any) {
    console.log('[InstructionsComponent] in selectselectInstruction(' + id + ')');

    this.instructions.forEach(r => {
      if (r.InstructionID === id) {
        console.log('found ', r);
        this.currentinstruction = (r as InstructionModel);
        this.currentinstruction.InstructionID = id;
      }
      return;
    });
  }

  updateInstruction() {
    console.log('[InstructionsComponent] in updateInstruction()');
    return this.service.updateInstruction(this.currentinstruction);
  }

  deleteInstruction(id: any) {
    console.log('[InstructionsComponent] deleteInstruction(' + id + ')');
    this.instructions = this.instructions.filter(p => p.InstructionID !== id);
    
    return this.service.deleteInstruction(id);
  }
}
