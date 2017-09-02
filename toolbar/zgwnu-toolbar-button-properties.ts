import { TooltipPosition } from '@angular/material'

export class ZgwnuToolbarButtonProperties {
    active: boolean
    disabled: boolean = false
    tooltip: string
    tooltipPosition: TooltipPosition = 'below'

    constructor(
        active: boolean,
        tooltip: string,
        tooltipPosition?: TooltipPosition,
    )
    {
        this.active = active
        this.tooltip = tooltip
        if (tooltipPosition) {
            this.tooltipPosition = tooltipPosition
        }
    }
}