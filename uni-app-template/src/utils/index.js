/**
 * 格式化时间
 * @param formatStr
 * @param timeDate
 */

export const formatTime = (formatStr, timeDate = '') => {
    let type = typeof timeDate
    let dateTime = timeDate
    if (type === 'string') {
        dateTime = timeDate ? new Date(timeDate.replace(/-/g, "/")) : new Date()
    }
    let year = dateTime.getFullYear();
    let mouth = addZero(dateTime.getMonth() + 1);
    let day = addZero(dateTime.getDate());
    let hour = addZero(dateTime.getHours());
    let minute = addZero(dateTime.getMinutes());
    let second = addZero(dateTime.getSeconds());
    let milliseconds = addZero(dateTime.getMilliseconds());

    function addZero(num) {
        if (Number(num) < 10) {
            return '0' + num;
        }
        return num
    }

    switch (formatStr) {
        case "yyyy-MM":
            return `${year}-${mouth}`;
        case "yyyy.MM.dd":
            return `${year}.${mouth}.${day}`;
        case "hh:mm":
            return `${hour}:${minute}`;
        case "hh.mm":
            return `${hour}.${minute}`;
        case "hh:mm:ss":
            return `${hour}.${minute}.${second}`;
        case "yyyy-MM-dd hh:mm:ss":
            return `${year}-${mouth}-${day} ${hour}:${minute}:${second}`;
        case "yyyy-MM-dd":
            return `${year}-${mouth}-${day}`;
        case "yyyyMMdd":
            return `${year}${mouth}${day}`;
        case "yyyyMMddhhmmss.ms":
            return `${year}${mouth}${day}${hour}${minute}${second}${milliseconds}`;
        case "MM月dd日":
            return `${mouth}月${day}日`;
        case "yyyy/MM/dd":
            return `${year}/${mouth}/${day}`;
        case "MM/dd":
            return `${mouth}/${day}`;
        case "MM月dd日hh:mm":
            return `${mouth}月${day}日${hour}:${minute}`;
    }
    return ''
}
