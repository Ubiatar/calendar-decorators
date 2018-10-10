import { configure } from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import DaysSelectorDecorator from './days-selector-decorator'

configure({ adapter: new Adapter() })


describe('Days selector', () => {
  it('should show no errors', () => {
    const form = (
			<DaysSelectorDecorator initial={[0, 0, 0, 0, 0, 0, 0]}>
        {(days, onDayToggle) => (<div>
          {days.map((day, index) => <button key={index} disabled={day}></button>)}
        </div>)}
			</DaysSelectorDecorator>
    )

    const mounted = mount(form)
    setTimeout(() => {
      expect(mounted.find('div').find('label').length).toBe(0)
    }, 10)
  })

  /*
  it('should show an error label', () => {
    let data = {yolo: 'swag swag'}
    const form = (
			<Validator data={data} joiObject={joiObject}>
        {(isValid, validations) => {
          return <div>
						<input name="yolo" value={data.yolo} onChange={() => data.yolo = ''}/>
            {
              validations.yolo.state === validationStates.WRONG && <label>{validations.yolo.error}</label>
            }
					</div>
        }}
			</Validator>
    )

    const mounted = mount(form)
    mounted.find('input').simulate('change', { target: { name: 'yolo', value: 'y' } })
    setTimeout(() => {
      expect(mounted.find('div').find('label').length).toBe(1)
    }, 10)
  })
  */
})
