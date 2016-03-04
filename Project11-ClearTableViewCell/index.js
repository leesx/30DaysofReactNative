import React, {
  StyleSheet,
  ListView,
  View,
  Text
} from 'react-native'

import autobind from 'autobind-decorator'
import LinearGradient from 'react-native-linear-gradient'

export const title = '11 - ClearTableViewCell'
export const description = 'Table列表'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

const tableData = [
  'Read 3 article on Medium',
  'Cleanup bedroom',
  'Go for a run',
  'Hit the gym',
  'Build another swift project',
  'Movement training',
  'Fix the layout problem of a client project',
  'Write the experience of #30daysSwift',
  'Inbox Zero',
  'Booking the ticket to Chengdu',
  'Test the Adobe Project Comet',
  'Hop on a call to mom'
]

@autobind
export default class ClearTableViewCell extends React.Component {
  state = {
    dataSource: ds.cloneWithRows(tableData)
  };

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }

  _renderRow (rowData, sectionID, rowID) {
    const bgColor = this._getCellBgColor(rowID)
    return (
      <View style={[styles.tabelCell, {backgroundColor: bgColor}]}>
        <LinearGradient
          key={sectionID}
          start={[0.5, 0.5]}
          end={[0.5, 0.5]}
          locations={[0.0, 0.04, 0.95, 1.0]}
          colors={[
            'rgba(255,255,255,0.2)',
            'rgba(255,255,255,0.1)',
            'rgba(0,255,0,0.0)',
            'rgba(0,0,0,0.05)'
          ]}
          style={styles.linearGradient}>
          <Text style={styles.text}>{rowData}</Text>
        </LinearGradient>
      </View>
    )
  }

  _getCellBgColor (index) {
    const totalCount = tableData.length - 1
    const color = Math.floor(256 * (Number(index) / totalCount) * 0.6)
    return `rgba(255, ${color}, 0, 1.0)`
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  tabelCell: {
    height: 60
  },
  text: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: 'Avenir Next',
    fontSize: 18
  }
})
