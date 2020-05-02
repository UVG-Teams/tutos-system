# Generated by Django 3.0.5 on 2020-05-02 00:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Workflow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('is_initial', models.BooleanField(null=True)),
                ('is_final', models.BooleanField(null=True)),
                ('next', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='next_status', to='workflows.Status')),
                ('prev', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='prev_status', to='workflows.Status')),
                ('workflow', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workflows.Workflow')),
            ],
        ),
    ]
