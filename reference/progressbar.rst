.. _api_ProgressBar:

ProgressBar
===========

Inherited: :doc:`Frame<api_Frame>`

.. _api_ProgressBar_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_ProgressBar_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`backgroundColor<api_ProgressBar_backgroundColor>` () const                     |
+------------------------------+--------------------------------------------------------------------------------------+
|                        float | :ref:`from<api_ProgressBar_from>` () const                                           |
+------------------------------+--------------------------------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`progress<api_ProgressBar_progress>` () const                                   |
+------------------------------+--------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`progressColor<api_ProgressBar_progressColor>` () const                         |
+------------------------------+--------------------------------------------------------------------------------------+
|                         void | :ref:`setBackgroundColor<api_ProgressBar_setBackgroundColor>` (const Vector4  color) |
+------------------------------+--------------------------------------------------------------------------------------+
|                         void | :ref:`setFrom<api_ProgressBar_setFrom>` (float  value)                               |
+------------------------------+--------------------------------------------------------------------------------------+
|                         void | :ref:`setProgress<api_ProgressBar_setProgress>` (Frame * frame)                      |
+------------------------------+--------------------------------------------------------------------------------------+
|                         void | :ref:`setProgressColor<api_ProgressBar_setProgressColor>` (const Vector4  color)     |
+------------------------------+--------------------------------------------------------------------------------------+
|                         void | :ref:`setTo<api_ProgressBar_setTo>` (float  value)                                   |
+------------------------------+--------------------------------------------------------------------------------------+
|                         void | :ref:`setValue<api_ProgressBar_setValue>` (float  value)                             |
+------------------------------+--------------------------------------------------------------------------------------+
|                        float | :ref:`to<api_ProgressBar_to>` () const                                               |
+------------------------------+--------------------------------------------------------------------------------------+
|                        float | :ref:`value<api_ProgressBar_value>` () const                                         |
+------------------------------+--------------------------------------------------------------------------------------+



.. _api_ProgressBar_static:

Static Methods
--------------

None

.. _api_ProgressBar_methods:

Methods Description
-------------------

.. _api_ProgressBar_backgroundColor:

 :ref:`Vector4<api_Vector4>` **ProgressBar::backgroundColor** () const

Returns the background color of the progress bar.

**See also** setBackgroundColor().

----

.. _api_ProgressBar_from:

 float **ProgressBar::from** () const

Returns the minimum value of the progress range.

**See also** setFrom().

----

.. _api_ProgressBar_progress:

 :ref:`Frame<api_Frame>`* **ProgressBar::progress** () const

Returns the frame representing the progress bar.

**See also** setProgress().

----

.. _api_ProgressBar_progressColor:

 :ref:`Vector4<api_Vector4>` **ProgressBar::progressColor** () const

Returns the color of the progress indicator.

**See also** setProgressColor().

----

.. _api_ProgressBar_setBackgroundColor:

 void **ProgressBar::setBackgroundColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the background *color* of the progress bar.

**See also** backgroundColor().

----

.. _api_ProgressBar_setFrom:

 void **ProgressBar::setFrom** (float  *value*)

Sets the minimum *value* of the progress range.

**See also** from().

----

.. _api_ProgressBar_setProgress:

 void **ProgressBar::setProgress** (:ref:`Frame<api_Frame>` * *frame*)

Sets the *frame* representing the progress.

**See also** progress().

----

.. _api_ProgressBar_setProgressColor:

 void **ProgressBar::setProgressColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the progress indicator.

**See also** progressColor().

----

.. _api_ProgressBar_setTo:

 void **ProgressBar::setTo** (float  *value*)

Sets the maximum *value* of the progress range.

**See also** to().

----

.. _api_ProgressBar_setValue:

 void **ProgressBar::setValue** (float  *value*)

Sets the current progress *value*.

**See also** *value*().

----

.. _api_ProgressBar_to:

 float **ProgressBar::to** () const

Returns the maximum value of the progress range.

**See also** setTo().

----

.. _api_ProgressBar_value:

 float **ProgressBar::value** () const

Returns the current progress value.

**See also** setValue().


