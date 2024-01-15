# Generated by Django 5.0 on 2024-01-14 02:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0006_alter_products_track_inventory'),
        ('invoice', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InvoiceItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='invoice.invoice')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.product')),
            ],
        ),
    ]