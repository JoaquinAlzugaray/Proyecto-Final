"""empty message

Revision ID: a604b46bc062
Revises: 51dd6fd69248
Create Date: 2022-04-04 01:18:26.078470

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a604b46bc062'
down_revision = '51dd6fd69248'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('productID', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=256), nullable=False),
    sa.Column('category', sa.String(length=256), nullable=False),
    sa.Column('image', sa.String(length=256), nullable=False),
    sa.PrimaryKeyConstraint('productID'),
    sa.UniqueConstraint('description')
    )
    op.create_table('address',
    sa.Column('addressID', sa.Integer(), nullable=False),
    sa.Column('address1', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('addressID')
    )
    op.create_table('order_cart',
    sa.Column('orderCartID', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('TotalMount', sa.Integer(), nullable=True),
    sa.Column('productID', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['productID'], ['product.productID'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('orderCartID')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('order_cart')
    op.drop_table('address')
    op.drop_table('product')
    # ### end Alembic commands ###
