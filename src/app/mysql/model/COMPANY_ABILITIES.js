module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const COMPANY_ABILITIES = sequelizeConfig.define('COMPANY_ABILITIES',{
            Title: {
                type: Sequelize.STRING,
                comment: '뱃지 이름'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "COMPANY_ABILITIES", // 테이블 이름
            freezeTableName: true, // 복수형으로 바뀌지 않도록
            timestamps: false, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return COMPANY_ABILITIES;
};