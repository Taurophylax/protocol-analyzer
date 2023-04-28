from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length

class ProtocolForm(FlaskForm):
    experiment = StringField('Experiment', render_kw={"placeholder": "Experiment"}, validators=[DataRequired(), Length(max=256)])
    campaign   = StringField('Campaign', render_kw={"placeholder": "Campaign"}, validators=[DataRequired(), Length(max=256)])
    researcher = StringField('Researcher', render_kw={"placeholder": "Researcher"}, validators=[DataRequired(), Length(max=256)])
    reason     = StringField('Reason', render_kw={"placeholder": "Reason"}, validators=[DataRequired(), Length(max=256)]) 
    organism   = StringField('Organism', render_kw={"placeholder": "Organism"}, validators=[DataRequired(), Length(max=256)])
    tissue     = StringField('Tissue', render_kw={"placeholder": "Tissue"}, validators=[DataRequired(), Length(max=256)])
    comment    = TextAreaField('Comment', render_kw={"placeholder": "Comment"}, validators=[Length(max=3072)]) # 3072 is 1 page of notes
    submit     = SubmitField('Submit')
